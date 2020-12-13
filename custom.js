

// basics setup 

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);


document.body.appendChild(renderer.domElement);




// creat shape //

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// here (1,1,1) = (height,width,length)

// creat material and color //

var material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} );


var cube = new THREE.Mesh(geometry,material);
scene.add(cube);
camera.position.z = 3;


// gamelogic / behaviour setup


function update(){

	cube.rotation.x += 0.1;
	cube.rotation.y += 0.005;

};




//draw scene / object draw

var render = function(){
 renderer.render(scene, camera);

};



// loop

var GameLoop = function(){

requestAnimationFrame(GameLoop)

update();
render();

};


GameLoop();











