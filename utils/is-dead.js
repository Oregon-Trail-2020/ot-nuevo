function isDead(user) {
    if (user.energy <= 0 || user.food <= 0) return true;
    return false;
}

export default isDead;