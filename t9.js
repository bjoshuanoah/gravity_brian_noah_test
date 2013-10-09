function getPossibleWords (number_array, callback) {
    var t9_list = {
            2: ['a', 'b', 'c'],
            3: ['d','e','f'],
            4: ['g','h','i'],
            5: ['j','k','l'],
            6: ['m','n','o'],
            7: ['p','q','r','s'],
            8: ['t','u','v'],
            9: ['w','x','y','z'],
        };
    var word_obj = {};
    word_array = []
    var letter_array = [];
    console.log(number_array.length);
    for (var i = 0; i < number_array.length; i++) {
        possible_letter_array = t9_list[number_array[i]];
        if (word_array.length === 0) {
            for (var _i = 0; _i < possible_letter_array.length; _i++) {
                word_obj[_i] = possible_letter_array[_i];
            }
            for (key in word_obj) {
                word_array.push(word_obj[key]);
            }
        } else {
            for (key in word_obj) {
                word_obj[key] = {i: word_obj.key};
            }
            for (var _i = 0; _i < possible_letter_array.length; _i++) {
                var _e = _i;
                for (key in word_obj) {

                    // word_obj[key][_i] =
                }
            }
            console.log(word_obj);
            for (key in word_obj) {
                word_array.push(word_obj[key]);
            }
        }
    }
    callback(word_array);
}

function t9 ($scope) {

    var current_word_numbers = [];
    $scope.words = [];
    $scope.message = '';
    $scope.handleNumber = function (e) {
        var $this = $(e.target) || $(e.target).closest('.number'),
            number = $this.attr('data-number'),
            i;
        if (number !== '1' && number !== '0') {
            current_word_numbers.push(number);
            getPossibleWords(current_word_numbers, function (words) {
                $scope.words = words;
            });
        } else if (number === '0') {
            console.log(number);
            $scope.message += ' ';
            $scope.words = [];
            current_word_numbers = [];
        } else {
            return;
        }
    };
    $scope.selectWord = function (e) {
        var $this = $(e.target) || $(e.target).closest('.word_choice'),
            word = $this.attr('data-word');
            $scope.message += ' ' + word;
            $scope.words = [];
    };
}
