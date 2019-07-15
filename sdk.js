//Created by Jesus Arciniega arciniega.dev
console.log('%c👨‍💻 arciniega.dev ', 'background: #000; color: #fff');                            //Console mark.

//Data structure
/*
var object = {
    attribute: value,
    function: function(){} <= every function returns something.
}
*/

//Proxy
const CORS_proxy = 'https://cors-anywhere.herokuapp.com/';

//Global vars.
//Bootstrap CDN
let bootstrap_js = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js';
let bootstrap_css = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
//Firebase CDN
let firebase_app_url = 'https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js';
let firebase_auth_url = 'https://www.gstatic.com/firebasejs/6.3.0/firebase-auth.js';
let firestore_url = 'https://www.gstatic.com/firebasejs/6.3.0/firebase-firestore.js';
let firebase_functions = 'https://www.gstatic.com/firebasejs/6.3.0/firebase-functions.js';
let firebase_db_url = 'https://www.gstatic.com/firebasejs/6.3.0/firebase-database.js';
//Fontawesome CDN.
let fontawesome_url = 'https://kit.fontawesome.com/6d9fea6719.js';
//Google icons CDN
let google_icons_url = 'https://fonts.googleapis.com/icon?family=Material+Icons';
//MaterializeCSS CDN
let materializecss_js = 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js';
let materializecss_css = 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css';

//User data
let userUID = '';
let userName = '';
let userMail = '';
let userPhoto = '';

//Extra function for the slide arrows.
function sliderArrow(div_container, index, timer, dots, arrows, counter, limit) {
    var container = '';
    if (typeof div_container !== 'string') { container = div_container.id.toString(); } else { container = div_container; }
    //Validating the arrows index.
    if (index < 0) { index = (parseInt(limit) - 1); }
    if (index >= limit) { index = 0; }
    //Removing the current slide
    document.querySelector('.mySlides').remove();
    document.querySelector('.dot_container').remove();
    //Create the new one.
    ARC.slider(slide_pictures, container, index, timer, dots, arrows, counter, slide_captions);
}

//Extra funtion for the slide dots.
function slideDots(div_container, index, timer, dots, arrows, counter) {
    //Removing the current slide
    document.querySelector('.mySlides').remove();
    document.querySelector('.dot_container').remove();
    //Create the new one.
    ARC.slider(slide_pictures, div_container.id.toString(), index, timer, dots, arrows, counter, slide_captions);
}


//Objects and functions.
const ARC = {
    debug: false,
    fade_element: element => {
        var fade_effect = setInterval(function () {
            if (!element.style.opacity) {
                element.style.opacity = 1;
            }
            if (element.style.opacity > 0) {
                element.style.opacity -= 0.1;
            } else {
                element.style.display = 'none';
                clearInterval(fade_effect);
            }
        }, 70);
    },
    Imports: {
        '=>': 'Object to import libraries to the web.',
        Bootstrap: () => { //Bootstrap Library >> https://getbootstrap.com
            try {
                let bootstrap_script = document.createElement('script');
                bootstrap_script.src = bootstrap_js;
                bootstrap_script.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(bootstrap_script);

                let bootstrap_style = document.createElement('link');
                bootstrap_style.rel = 'stylesheet';
                bootstrap_style.href = bootstrap_css;
                document.getElementsByTagName('body')[0].appendChild(bootstrap_style);

                if (ARC.debug === true) console.log('✔️ Bootstrap');
            } catch (error) {
                if (ARC.debug === true) console.log('❌ Bootstrap : ' + error);
            }
        },
        customScript: (url, name = 'Custom Script') => { //Bootstrap Library >> https://getbootstrap.com
            try {
                let bootstrap_script = document.createElement('script');
                bootstrap_script.src = url;
                bootstrap_script.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(bootstrap_script);

                if (ARC.debug === true) console.log(`✔️ ${name} loaded`);
            } catch (error) {
                if (ARC.debug === true) console.log(`✔❌ ${name} error: ${error}`);
            }
        },
        Firebase: (auth = true, firestore = true, functions = false, db = false) => { //Fontawesome Library >> https://fontawesome.com/icons?d=gallery 
            try {
                let firebase_script = document.createElement('script');
                firebase_script.src = firebase_app_url;
                firebase_script.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(firebase_script);
                if (ARC.debug === true) console.log('✔️ Firebase');

                if (auth) {
                    let firebase_auth = document.createElement('script');
                    firebase_auth.src = firebase_auth_url;
                    firebase_auth.type = 'text/javascript';
                    document.getElementsByTagName('head')[0].appendChild(firebase_auth);
                    if (ARC.debug === true) console.log('✔️ Firebase auth');
                }

                if (firestore) {
                    let firestore_script = document.createElement('script');
                    firestore_script.src = firestore_url;
                    firestore_script.type = 'text/javascript';
                    document.getElementsByTagName('head')[0].appendChild(firestore_script);
                    if (ARC.debug === true) console.log('✔️ Firestore');
                }

                if (functions) {
                    let functions_script = document.createElement('script');
                    functions_script.src = firebase_functions;
                    functions_script.type = 'text/javascript';
                    document.getElementsByTagName('head')[0].appendChild(functions_script);
                    if (ARC.debug === true) console.log('✔️ Firestore');
                }

                if (db) {
                    let firebase_db = document.createElement('script');
                    firebase_db.src = firebase_db_url;
                    firebase_db.type = 'text/javascript';
                    document.getElementsByTagName('head')[0].appendChild(firebase_db);
                    if (ARC.debug === true) console.log('✔️ Firebase DB');
                }


            } catch (error) {
                if (ARC.debug === true) console.log('❌ Firebase : ' + error);
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
    load: (url, element) => { //Loads an url into the indicated DOM element.
        if (!url || !element) { if (ARC.debug === true) console.log('⚠️ Parameters needed'); } else {
            try {
                req = new XMLHttpRequest();
                req.open("GET", url, true);
                req.onreadystatechange = function () {
                    if (req.readyState != 4 || req.status != 200) return;
                    element.innerHTML = req.responseText;
                };
                req.send(null);

                element.innerHTML = req.responseText
                if (ARC.debug === true) console.log('✔️ Url Loaded');
            } catch (error) {
                if (ARC.debug === true) console.log('❌ Url Loader : ' + error);
            }
        }

    },
    simple_ajax_get: (url, json_data, async = false) => {
        if (!url) { if (ARC.debug === true) console.log('⚠️ Parameters needed'); } else {
            let return_value = '';
            try {
                // Set up our HTTP request
                var xhr = new XMLHttpRequest();

                // Setup our listener to process completed requests
                xhr.onload = function () {
                    // Process our return data
                    if (xhr.status >= 200 && xhr.status < 300) {
                        if (ARC.debug === true) console.log('✔️ GET Complete');
                        // What do when the request is successful
                        return_value = JSON.parse(xhr.response);
                    } else {
                        // What do when the request fails
                        if (ARC.debug === true) console.log('❌ GET Failed : ' + error);
                        return [];
                    }
                };

                // Create and send a GET request
                // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
                // The second argument is the endpoint URL
                xhr.open('GET', CORS_proxy + url, async);
                if (json_data) {
                    xhr.send(json_data);
                } else {
                    xhr.send();
                }

                return return_value;

                if (ARC.debug === true) console.log('✔️ GET Complete');
            } catch (error) {
                if (ARC.debug === true) console.log('❌ Url Loader : ' + error);
                return [];
            }
        }
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

//Firebase Object
const Firebase = {
    init: (apikey, project_id) => {
        if (!apikey || !project_id) { if (ARC.debug === true) console.log('⚠️ Parameters needed'); } else {
            try {
                // TODO: Replace the following with your app's Firebase project configuration
                let firebaseConfig = {
                    apiKey: apikey,
                    authDomain: project_id + ".firebaseapp.com",
                    databaseURL: `https://${project_id}.firebaseio.com`,
                    projectId: project_id,
                    storageBucket: project_id + ".appspot.com",
                    messagingSenderId: "sender-id",
                };

                // Initialize Firebase
                setTimeout(() => {
                    firebase.initializeApp(firebaseConfig);
                    if (ARC.debug === true) console.log('🔥 Firebase initialized');
                }, 500);
            } catch (error) {
                if (ARC.debug === true) console.log('❌ Firebase init fail: ' + error);
            }
        }
    },
    google_login: (reload = false) => {
        try {
            setTimeout(() => {
                //Firebase auth proveider.
                let provider = new firebase.auth.GoogleAuthProvider();

                firebase.auth().signInWithPopup(provider).then(function (result) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    // ...
                    userName = user.providerData[0].displayName;
                    userMail = user.providerData[0].email;
                    userPhoto = user.providerData[0].photoURL;
                    if (ARC.debug === true) console.log('🔥 Google Login');
                    if (reload) {
                        location.reload();
                    }
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                    if (ARC.debug === true) console.log('❌ Firebase Google auth fail: ' + error);
                });
            }, 500);
        } catch (error) {

        }
    },
    login_observer: (auto_login = false, login_provider) => {
        setTimeout(() => {
            try {
                firebase.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        // User is signed in.
                        userName = user.displayName;
                        userMail = user.email;
                        //var emailVerified = user.emailVerified;
                        userPhoto = user.photoURL;
                        //var isAnonymous = user.isAnonymous;
                        userUID = user.uid;
                        //var providerData = user.providerData;
                        // ...
                        if (ARC.debug === true) console.log('🔥 Signed user');
                    } else {
                        // User is signed out.
                        // ...
                        if (ARC.debug === true) console.log('❌ Unsigned user');

                        if (auto_login) {
                            if (ARC.debug === true) console.log('🔥 Log in with ' + login_provider);
                            switch (login_provider) {
                                case 'Google':
                                    Firebase.google_login();
                                    break;
                            }
                        }
                    }
                });
            } catch (error) {
                if (ARC.debug === true) console.log('❌ Unsigned user: ' + error);
            }
        }, 500);
    }
};

//MaterializeCSS Object
const Materialize = {
    init_sidebar: (sidebar_class, ...options) => {
        try {
            let sidebar = document.querySelectorAll('.' + sidebar_class);
            let sidebarOptions = options;

            M.Sidenav.init(sidebar, sidebarOptions);
            if (ARC.debug === true) console.log('✔️ Sidebar initialized');
        } catch (error) {
            if (ARC.debug === true) console.log('❌ Sidebar error : ' + error);
        }
    }
}