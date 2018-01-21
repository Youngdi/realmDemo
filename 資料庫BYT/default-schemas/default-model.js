exports.Person = {
  name: 'Person',
  properties: {
    name: 'string',
    nickname: 'string',
    birthday: 'date',
    picture: 'string?'
  }
}

exports.bible_chs = {
  name: 'bible_chs',
  properties: {
    version: 'string?',
    testament: 'int?',
    book_ref: 'string?',
    book_name: 'string?',
    book_name_short: 'string?',
    book_nr: 'int?',
    chapter_nr: 'int?',
    verse_nr: 'int?',
    verse: 'string?'
  }
}

exports.bible_cht = {
  name: 'bible_cht',
  properties: {
    version: 'string?',
    testament: 'int?',
    book_ref: 'string?',
    book_name: 'string?',
    book_name_short: 'string?',
    book_nr: 'int?',
    chapter_nr: 'int?',
    verse_nr: 'int?',
    verse: 'string?'
  }
}

exports.bible_japan = {
  name: 'bible_japan',
  properties: {
    id: 'int?',
    version: 'string?',
    testament: 'int?',
    book_ref: 'string?',
    book_name: 'string?',
    book_name_short: 'string?',
    book_nr: 'int?',
    chapter_nr: 'int?',
    verse_nr: 'int?',
    verse: 'string?'
  }
}

exports.bible_kjv = {
  name: 'bible_kjv',
  properties: {
    version: 'string?',
    testament: 'int?',
    book_ref: 'string?',
    book_name: 'string?',
    book_name_short: 'string?',
    book_nr: 'int?',
    chapter_nr: 'int?',
    verse_nr: 'int?',
    verse: 'string?'
  }
}

exports.schedule = {
  name: 'schedule',
  properties: {
    id: 'int?',
    month: 'int?',
    day: 'int?',
    book_id: 'int?',
    chapter_from: 'int?',
    verse_from: 'int?',
    chapter_to: 'int?',
    verse_to: 'int?'
  }
}

