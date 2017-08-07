$('#githubModal').on('show.bs.modal', function (e) {
  var $element = $(this),
    url = 'https://api.github.com/users/{username}';

  title = '嗨，我的名子是{name}',
    content = '' +
    '<div class="row">' +
    '<img src="{img}" class="col-sm-3">' +
    '<p class="col-sm-9" id="bio">{bio}</p>' +
    '</div>',

    bio = '' +
    '目前我有{publicRepo}篇公開的回覆，' +
    '以及{followers}位跟隨者。\n' +
    '我是在{dateJoin}加入Github的。';

  url = url.replace(/{username}/, $('#github-username').val());


  $.get(url, function (data) {
    console.log(data);

    title = title.replace(/{name}/, data.name)


    bio = bio.replace(/{publicRepo}/, data.public_repos)
      .replace(/{followers}/, data.followers)
      .replace(/{dateJoin}/, data.created_at.split('T')[0]);

    content = content.replace(/{img}/, data.avatar_url)
      .replace(/{bio}/, bio)

      $element.find('.modal-title').text(title);
      $element.find('.modal-body').html(content);
  })
})