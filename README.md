# wasm_webgl_shader
## compile:
emcc -o ./dist/appWASM.js ./dev/cpp/emscripten.cpp -O3 -s ALLOW_MEMORY_GROWTH=1 -s USE_WEBGL2=1 -s FULL_ES3=1 -s WASM=1 -s NO_EXIT_RUNTIME=1 -std=c++1z -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']" -s EXPORTED_FUNCTIONS="['_main', '_malloc', '_free', 'stringToUTF8']" -s DISABLE_DEPRECATED_FIND_EVENT_TARGET_BEHAVIOR=0
## http server:
node server.js
## web browser
chrome (firefox not supported)
