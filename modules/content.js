const giveContent =(username)=>{
  return `<!-- <div style="width: 30px; display: block">Test</div> -->
<div class="topnav">
    <div class="topnav-left">
        <div class="logo"></div>
        <form class="topnav-searchbar-form" action="" method="get">
            <input class="search-input" type="text" placeholder="search" name="search">
            <button class="search-btn" type="submit"><i class="fa fa-search"></i></button>
        </form>

    </div>
    <div class="topnav-right">
        <div id="login-dropdown" class="login-dropdown">
            <ul class="login-dropdown-content">
                <li href="#smth">some function</li>
                <li href="#smth">some function</li>
                <hr>
                <li href="#smth" onclick="document.getElementById('popup2').style.display='block'">Sign Up/Log In</li>
                <li href="#smth" onclick="document.getElementById('popup').style.display='block'">Log In</li>
            </ul>
        </div>
        <button onclick="document.getElementById('popup2').style.display='block'"
                class="signin-button pink-btn">SIGN UP</button>
        <button onclick="document.getElementById('popup').style.display='block'"
                class="signin-button yellow-btn">LOG IN</button>
        <button id="user-icon" class="user-icon">
            <i class="fa fa-caret-down fa-2x " aria-hidden="true"></i>
        </button>

    </div>
</div>

<section id="popup" class="modal modal1">
    <div  class="login-container animate">
        <span class="close" id="login-close">&times;</span>
        <h1 class="prelim-logo">The Archive</h1>

        <form  class="login-form" action="/" method="post">

            <fieldset class="input-fieldset">
                USER NAME <br>
                <input type="text" name="username"  required>

            </fieldset>

            <fieldset class="input-fieldset">
                PASSWORD <br>
                <input type="password" name="password"  required>
                <p class="new-to-text">New to The Archive? <a onclick="document.getElementById('popup2').style.display='block'"
                                                               class="pink-text" href="#">Sign Up</a></p>
            </fieldset>

            <fieldset class="form-center btn-bottom-edge">

                <input type="submit" class="form-submit-btn btn-sign-in gray-btn" name="sign-up" value="Sign In">
            </fieldset>

        </form>
    </div>
</section>

<section id="popup2" class="modal modal2 ">
    <div class="sign-up-container animate">
        <span class="close" id="signup-close">&times;</span>
        <h1 class="prelim-logo">The Archive</h1>

        <form  class="sign-up-form" action="/" method="post">

            <fieldset class="input-fieldset">
                USER NAME <br>
                <input type="text" name="username"  required>
                <span class="form-error"></span>
            </fieldset>

            <fieldset class="input-fieldset">
                EMAIL <br>
                <input type="email" name="email" required>
                <span class="form-error"></span>
            </fieldset>

            <fieldset class="input-fieldset">
                PASSWORD <br>
                <input type="password" name="password"  required>
                <span class="form-error"></span>
            </fieldset>

            <fieldset class="input-fieldset">
                CONFIRM PASSWORD <br>
                <input type="password" name="retype-password"  required>
                <span class="form-error"></span>
                <br><p class="new-to-text">Already have an account? <a  class="pink-text" href="#">Sign in</a></p><br>
            </fieldset>


            <fieldset class="form-center btn-bottom-edge">
                <input type="submit" class="form-submit-btn btn-sign-up yellow-btn" name="sign-up" value="Sign Up">

            </fieldset>
        </form>
    </div>
</section>
<!--<script>
  document.querySelector('div').addEventListener('click',()=>{
    {
      fetch('http://10.114.32.123/node/ask',{
        method: 'POST'
      }).then(res => {console.log(res);})
    }
  })
</script>-->
<aside>

</aside>
<main>

</main>
<script>
    fetch('/node/check').then(res =>
        res.text()
    ).then(text => console.log(text));
</script>
<!--<script src="res/js/main.js"></script>-->
<!--<script src="res/js/commune.js"></script>-->`
};

module.exports = {
  giveContent:giveContent
};