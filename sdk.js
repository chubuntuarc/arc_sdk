//Created by Jesus Arciniega arciniega.dev
console.log('%c👨‍💻 arciniega.dev ', 'background: #000; color: #fff');                            //Console mark.

//Data structure
/*
var object = {
    attribute: value,
    function: function(){} <= every function returns something.
}
*/

//Global vars.
//Bootstrap CDN
let bootstrap_js        = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js';
let bootstrap_css       = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
//Fontawesome CDN.
let fontawesome_url     = 'https://kit.fontawesome.com/6d9fea6719.js';
//Google icons CDN
let google_icons_url    = 'https://fonts.googleapis.com/icon?family=Material+Icons';
//MaterializeCSS CDN
let materializecss_js   = 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js';
let materializecss_css  = 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css';


//Objects and functions.
const ARC = {
    debug: false,
    Imports: {
        '=>': 'Object to import libraries to the web.',
        Bootstrap: () => { //Bootstrap Library >> https://getbootstrap.com
            try {
                let bootstrap_script    = document.createElement('script');
                bootstrap_script.src    = bootstrap_js;
                bootstrap_script.type   = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(bootstrap_script);

                let bootstrap_style   = document.createElement('style');
                bootstrap_style.type  = 'text/css';
                bootstrap_style.appendChild(document.createTextNode(bootstrap_css));
                document.getElementsByTagName('body')[0].appendChild(bootstrap_style);

                if (ARC.debug === true) console.log('✔️ Bootstrap');
            } catch (error) {
                if (ARC.debug === true) console.log('❌ Bootstrap : ' + error);
            }
        },
        Fontawesome: () => { //Fontawesome Library >> https://fontawesome.com/icons?d=gallery 
            try {
                let awesome_script = document.createElement('script');
                awesome_script.src = fontawesome_url;
                awesome_script.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(awesome_script);
                if (ARC.debug === true) console.log('✔️ FontAwesome');
            } catch (error) {
                if (ARC.debug === true) console.log('❌ FontAwesome : ' + error);
            }
        },
        GoogleIcons: () => { //Google Material Design icons Library >> https://material.io/tools/icons/?style=baseline 
            try {
                let google_icons_style = document.createElement('link');
                google_icons_style.rel = 'stylesheet';
                google_icons_style.href = google_icons_url;
                document.getElementsByTagName('head')[0].appendChild(google_icons_style);
                if (ARC.debug === true) console.log('✔️ Google Icons');
            } catch (error) {
                if (ARC.debug === true) console.log('❌ Google Icons : ' + error);
            }
        },
        MaterializeCSS: () => { //MaterializeCSS Library >> https://materializecss.com
            try {
                let materialize_script = document.createElement('script');
                materialize_script.src = materializecss_js;
                materialize_script.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(materialize_script);

                let materialize_style = document.createElement('link');
                materialize_style.rel = 'stylesheet';
                materialize_style.href = materializecss_css;
                document.getElementsByTagName('body')[0].appendChild(materialize_style);

                ARC.Imports.GoogleIcons(); //Needs Google Icons.

                setTimeout(() => {
                    M.AutoInit(); //Initialize all the elements. 
                }, 500);

                if (ARC.debug === true) console.log('✔️ MaterializeCSS');
            } catch (error) {
                if (ARC.debug === true) console.log('❌ MaterializeCSS : ' + error);
            }
        },
    },
    slider: (pictures_array, div_container, slider_index = 0, timer = 0, display_dots = false, display_arrows = false, display_counter = false, captions = []) => { //Function that create a slider
        if (!pictures_array || !div_container) { if (ARC.debug === true) console.log('⚠️ Parameters needed'); } else { //Parameters validation.

            let slide_style = document.createElement('style');
            let slide_css = '.slideshow-container{position:relative;margin:auto}.next,.prev{cursor:pointer;position:absolute;top:50%;width:auto;padding:16px;margin-top:-22px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0;user-select:none}.next{right:0;border-radius:3px 0 0 3px}.next:hover,.prev:hover{background-color:rgba(0,0,0,.8)}.text{color:#f2f2f2;font-size:15px;padding:8px 12px;position:absolute;bottom:8px;width:100%;text-align:center}.numbertext{color:#f2f2f2;font-size:12px;padding:8px 12px;position:absolute;top:0}.dot{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:#fff;border-radius:50%;display:inline-block;transition:background-color .6s ease}.active,.dot:hover{background-color:#000}.fade{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{from{opacity:.4}to{opacity:1}}@keyframes fade{from{opacity:.4}to{opacity:1}}@media only screen and (max-width:300px){.next,.prev,.text{font-size:11px}}.mySlides{display:none}';
            slide_style.type = 'text/css';
            slide_style.appendChild(document.createTextNode(slide_css));
            document.getElementsByTagName('body')[0].appendChild(slide_style);

            slide_pictures = pictures_array; //Setting the global array of pictures.
            if (slider_index < 0) { slider_index = 0 }
            slide_captions = captions; //Setting the global array of captions.
            slide_index = slider_index; //Set the global variable as the received variable.
            var counter_max = pictures_array.length; //Number of slides.
            var counter = slide_index + 1; //Current slide.

            //DOM element for display the slide.
            var slide_dom = '<div class="mySlides fade" style="display:block;">';
            if (display_counter === true) { slide_dom += '<div class="numbertext">' + counter + ' / ' + counter_max + '</div>'; } //Display counter of slides.
            slide_dom += '<img src="' + pictures_array[slide_index] + '" style="width:100%">';   //Slide picture
            if (captions.length > 0) { slide_dom += '<div class="text">' + captions[slide_index] + '</div>'; } //Show text captions if exists.
            slide_dom += '</div>';

            //DOM element for display the slide arrows.
            var arrows = '<a class="prev" onclick="sliderArrow(' + div_container + ',' + (parseInt(slider_index) - 1) + ', ' + timer + ',' + display_dots + ',' + display_arrows + ',' + display_counter + ', ' + pictures_array.length + ')">&#10094;</a>';
            arrows += '<a class="next" onclick = "sliderArrow(' + div_container + ',' + (parseInt(slider_index) + 1) + ', ' + timer + ',' + display_dots + ',' + display_arrows + ',' + display_counter + ', ' + pictures_array.length + ')" >&#10095;</a>';

            var dots = ' <div style="text-align:center;margin-top:-20px;" class="dot_container">';
            var dot_counter = 0;
            pictures_array.forEach(element => {
                if (slider_index === dot_counter) {
                    dots += '<span class="dot active" onclick="slideDots(' + div_container + ',' + dot_counter + ',' + timer + ',' + display_dots + ',' + display_arrows + ',' + display_counter + ')"></span>';
                } else {
                    dots += '<span class="dot" onclick="slideDots(' + div_container + ',' + dot_counter + ', ' + timer + ',' + display_dots + ',' + display_arrows + ',' + display_counter + ')"></span>';
                }
                dot_counter++;
            });
            dots += '</div>';

            try {
                //Setting the DOM elements.
                var container = document.getElementById(div_container);
                container.classList.add('slideshow-container');
                container.innerHTML += slide_dom;                                   //Adding slide.
                if (display_dots === true) { container.innerHTML += dots; }      //Adding dots.
                if (display_arrows === true) { container.innerHTML += arrows; }    //Adding arrows.
                if (timer > 0) {
                    setTimeout(() => {
                        sliderArrow(div_container, (parseInt(slider_index) + 1), timer, display_dots, display_arrows, display_counter, pictures_array.length);
                    }, timer);
                }
            } catch (error) {
                if (ARC.debug === true) console.log(error);
            }
        }
    }   
}