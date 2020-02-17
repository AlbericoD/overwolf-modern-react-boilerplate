echo 'Init overwolf build...'
cd build
rm asset-manifest.json service-worker.js precache-*.js
cd app
mv ../index.html Files
mv ../static Files
echo 'Compiled successfully!'