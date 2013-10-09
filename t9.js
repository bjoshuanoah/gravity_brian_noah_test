function getPossibleWords (numbers, callback) {
    var t9_list = {
            0: [],
            1: [],
            2: ['a', 'b', 'c'],
            3: ['d','e','f'],
            4: ['g','h','i'],
            5: ['j','k','l'],
            6: ['m','n','o'],
            7: ['p','q','r','s'],
            8: ['t','u','v'],
            9: ['w','x','y','z'],
        },
        number_array = numbers.split(''),
        letters_obj = {},
        word_array = [],
        first_letters = t9_list[number_array[0]];

        if (number_array.length === 1) {
            word_array = t9_list[number_array[0]];
        } else {
            for (i = 0; i < first_letters.length; i++) {
                var letter = first_letters[i];
                letters_obj[letter] = [letter];
            }
            console.log(letters_obj);
            for (key in letters_obj) {
                var letter_array = letters_obj[key];
                console.log(letter_array);
                console.log('first_letter', key);
                for (_n = 0; _n < number_array.length; _n++) {
                    var nth_letters = t9_list[number_array[_n]];
                    for (_a = 0; _a < letter_array.length; _a++) {
                        word = letter_array[_a];
                        console.log(word);
                        console.log(nth_letters.letter_array.length);
                        // for (_i = 0; _i < nth_letters.length; _i++) {
                        //     var letter = nth_letters[_i];
                        //     console.log(word + letter);
                        //     letter_array.push(word + letter);
                        // }
                    }
                }
                for (_o = 0; _o < letter_array.length; _o++) {
                    if (letter_array[_o].length < number_array.length) {
                        word_array.push(letter_array[_o]);
                    }
                }
            }
        }
    callback(word_array);
}

function t9 ($scope) {

    var numbers = '';
    $scope.words = [];
    $scope.message = '';
    $scope.handleNumber = function (e) {
        var $this = $(e.target) || $(e.target).closest('.number'),
            number = $this.attr('data-number'),
            i;
        if (number !== '1' && number !== '0') {
            numbers += number;
            getPossibleWords(numbers, function (words) {
                $scope.words = words;
            });
        } else if (number === '0') {
            console.log(number);
            $scope.message += ' ';
            $scope.words = [];
            numbers = '';
        } else {
            return;
        }
    };
    $scope.selectWord = function (e) {
        var $this = $(e.target) || $(e.target).closest('.word_choice'),
            word = $this.attr('data-word');
            $scope.message += ' ' + word;
            $scope.words = [];
            numbers = '';
    };
}
