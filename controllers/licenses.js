module.exports = (licenses) => {
  const licenseAPI = {

    // Gets a list of all the license items
    getAll: (req, res) => {
      try {
        res.status(200).json(licenses);
      } catch (e) {
        res.status(500).send('An error occured while attempting to get all of the license items');
      }
    },
  };

  return licenseAPI;
};
