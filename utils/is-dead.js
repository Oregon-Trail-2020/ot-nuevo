function isDead(user) {
    return user.energy === 0 || user.food === 0;
}

export default isDead;