const NewController = {
              // GET / news
                                index: (req, res) => {
                                  res.render('news');
                                },
              // [GET] /tin-tuc:slug
                                  show: (req, res) => {
                                          res.send('TEST!!!!');
                                  },
            };

export default NewController;
