function getPossibleWords (numbers, callback) {
    var t9_list = {0: [],1: [],2: ['a', 'b', 'c'],3: ['d','e','f'],4: ['g','h','i'],5: ['j','k','l'],6: ['m','n','o'],7: ['p','q','r','s'],8: ['t','u','v'],9: ['w','x','y','z']},
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
        for (key in letters_obj) {
            var word_index_array = letters_obj[key],
                word_index_array_max = 1;
            for (_n = 1; _n < number_array.length; _n++) {
                var nth_letters = t9_list[number_array[_n]],
                    arr = [];
                word_index_array_max = word_index_array_max * nth_letters.length;
                for (_a = 0; _a < word_index_array.length; _a++) {
                    word = word_index_array[_a];
                    for (_i = 0; _i < nth_letters.length; _i++) {
                        var letter = nth_letters[_i];
                        if (word_index_array.length <= word_index_array_max) {
                            arr.push(word + letter);
                        }
                    }
                }
                word_index_array = arr;
            }
            for (_o = 0; _o < word_index_array.length; _o++) {
                if (word_index_array[_o].length === number_array.length) {
                    word_array.push(word_index_array[_o]);
                }
            }
        }
    }
    if (typeof callback === 'function') {
        callback(word_array);
    } else {
        return word_array;
    }
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
            $scope.words = getPossibleWords(numbers);
            // getPossibleWords(numbers, function (words) {
            //     $scope.words = words;
            // });
        } else if (number === '0') {
            $scope.message += ' ';
            $scope.words = [];
            numbers = '';
        } else {
            $scope.message = '';
            $scope.words = [];
            numbers = '';
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
