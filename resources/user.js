const toArray = (user) => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.createdAt,
        updated_at: user.updatedAt
    };
};

module.exports = {
    make: (user) => toArray(user),
    collection: (users) => users.map(user => toArray(user))
};