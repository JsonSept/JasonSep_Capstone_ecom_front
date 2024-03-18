<template lang="">
    <footer fixed="bottom">
        <div>
            <p class="rainbow_text animated">&copy; Copyright <span id="year">{{new Date().getFullYear()}}</span> JSON Fitness. All Rights Reserved.</p>
        </div>
        <div class="div2">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>

<div class="btn-group dropdown">
    <!-- <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
        </svg>
   
</div>

<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
</div>
</footer>
</template>
<script>
export default {
}
</script>
<style>
li {
color: white;
}
svg {
transition: transform .5s;
}
svg:hover {
transform: scale(1.5);
}
.div2{
display: flex;
justify-content: center;
padding-bottom: 10px;
justify-content: space-around;
}
footer{
background-color: rgb(22, 22, 22);
color: #000030;
margin-top: 0%;
text-align: center;
position:fixed;
bottom: 0;
width: 100%;
}
footer p{
padding-top: 15px;
padding-bottom: 15px;
font-size: larger;
}
/* Footer Animation */
.rainbow_text {
display: inline-block;
font-family: Arial, Helvetica, sans-serif;
background: black;
background: linear-gradient(to right, rgb(0, 225, 255), rgb(210, 215, 234) , rgb(8, 210, 126));
-webkit-background-clip: text;
background-clip: text;
color: transparent;
}
.rainbow_text.animated {
animation: rainbow_animation 5s ease-in-out infinite;
background-size: 400%;
}
@keyframes rainbow_animation {
0%,100% {
background-position: 0
}

50% {
background-position: 100%
}
}
</style>