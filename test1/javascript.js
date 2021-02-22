

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z=0.8


scene.background=new THREE.Color('whitesmoke')

const renderer = new THREE.WebGLRenderer({antialias: true });
renderer.setPixelRatio(window.devicePixelRatio)


renderer.setSize( window.innerWidth/1.02, window.innerHeight );
document.getElementById("canvas").appendChild( renderer.domElement );
let lumiere=new THREE.AmbientLight( 0xffffff)
scene.add(lumiere)
const loader=new THREE.GLTFLoader()


/************lumiere */

// Add lights
let hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.61 );
    hemiLight.position.set( 0, 50, 0 );
// Add hemisphere light to scene   
scene.add( hemiLight );

let dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
    dirLight.position.set( -8, 12, 8 );
    dirLight.castShadow = true;
    dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
// Add directional Light to scene    
    scene.add( dirLight );

/************lumiere */



loader.load('./spherePortfolio.gltf',function ( gltf ){

		scene.add( gltf.scene );
  

	},

	undefined, function ( error ) {

		console.error( error );
	
	} 

);

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	scene.rotation.y -= 0.002;
}
animate();


