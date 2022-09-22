const db = require("../db/models");
const Employe = db.Employe;

const index = async (_req, res) => {
  try {
    const employes = await Employe.findAndCountAll();
    res.status(200).json({
      success: true,
      data: employes,
    });
  } catch (error) {
    res.status(422).json(error);
  }
};

const store = async (req, res) => {
  try {
    const employe = await Employe.create(req.body);
    res.status(201).json({
      success: true,
      data: employe,
    });
  } catch (error) {
    res.status(422).json(error);
  }
};

const getById = async (req,res) => {
  try {
    const {id} = req.params
    const employe = await Employe.findOne({ where: {
      id
    }})
    res.status(200).json({
      success:true,
      data: employe
    })
  } catch (error) {
    res.status(422).json(error);
  }
}

const update = async (req, res) => {
  const {id} = req.params
  try {
    await Employe.update(req.body,{
      where: {
        id
      }
    })
    const employe = await Employe.findOne({
      where: {id}
    })
    res.status(200).json({
      success:true,
      data: employe
    })
  } catch (error) {
    res.status(422).json(error);
  }
}

const destroy = async (req,res) => {
  try {
    const {id} = req.params
    const employe = await Employe.destroy({
      where: {
        id
      }
    })
    res.status(200).json({
      success:true,
      data: employe
    })
  } catch (error) {
    res.status(422).json(error);
  }
}

module.exports = {
  index,
  store,
  getById,
  update,
  destroy
};
