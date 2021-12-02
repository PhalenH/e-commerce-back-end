const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ Model: Product }],
    });
    
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ Model: Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  const tagData = await Tag.create(req.body);

  return res.json(tagData);
  // create a new tag
});

  // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  try {
    const tagData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    
    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;