function jumlahLuasDuaPersegi(x,y) {
    var LuasX;
    var LuasY;
    var total;

    LuasX = x * x;
    LuasY = y * y;

    total = LuasX + LuasY;

    return total;
}

console.log(jumlahLuasDuaPersegi(9, 5));