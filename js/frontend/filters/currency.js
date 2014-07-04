'use strict';

define(['./module', 'dwutil/currencyformat'], function (filters, CurrencyFormatting) {

// Filter like currencyFilter adding the + sign for positive amounts.
filters.filter('amountFilter', function() {
  return function(input) {
    var value = CurrencyFormatting.asBtc(input);

    var prefix = (value>=0) ? '+' : '-';
    return prefix + CurrencyFormatting.addThousands(Math.abs(value));
  };
});

// Filter for presenting a satoshi amount into selected btc unit
filters.filter('asFiat', function() {
  return function(input) {
    return CurrencyFormatting.asFiat(input);
  };
});


// Filter for presenting a satoshi amount into selected btc unit
filters.filter('asBtc', function() {
  return function(input) {
    return CurrencyFormatting.addThousands(CurrencyFormatting.asBtc(input));
  };
});

filters.filter('formatBtc', function() {
  return function(input) {
    return CurrencyFormatting.formatBtc(input);
  };
});

filters.filter('formatFiat', function() {
  return function(input) {
    return CurrencyFormatting.formatFiat(input);
  };
});

// Filter for presenting a satoshi amount into selected btc unit with unit label
filters.filter('currencyPresenter', function() {
  return function(input) {
    return CurrencyFormatting.format(input);
  };
});

});
