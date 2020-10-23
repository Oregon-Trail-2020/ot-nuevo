function isDead(user) {
    if (user.energy <= 0 || user.food <= 0 || user.food === null) return true;
    return false;
    
}

export default isDead;