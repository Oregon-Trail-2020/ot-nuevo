function isDead(user) {
    // no need to declare the boolean, since this resolves to a bool anyhow
    return user.energy <= 0 || user.food <= 0 || user.food === null;
}

export default isDead;