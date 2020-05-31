
var keys = Object.keys(typesData);

// starts testing
QUnit.test("Testing data types", function(assert) {

  keys.forEach( function(key) {
    assert.ok( sdjs.valiType(key, "", typesData[key], ""), "Data type: " + key );
  });
});

QUnit.test("Testing data constraints", function(assert) {
  assert.ok( sdjs.valiConstraint({"maxInclusive": cstrsData.maxInclusive}, "", 999.99, ""), "Data constraint: maxInclusive" );
  
  assert.ok( sdjs.valiConstraint({"minInclusive": cstrsData.minInclusive}, "", 100.01, ""), "Data constraint: minInclusive" );
  
  assert.ok( sdjs.valiConstraint({"maxExclusive": cstrsData.maxExclusive}, "", 999.99, ""), "Data constraint: maxExclusive" );

  assert.ok( sdjs.valiConstraint({"minExclusive": cstrsData.minExclusive}, "", 100.01, ""), "Data constraint: minExclusive" );
    
  assert.ok( sdjs.valiConstraint({"totalDigits": cstrsData.totalDigits}, "", 10025, ""), "Data constraint: totalDigits" );
    
  assert.ok( sdjs.valiConstraint({"fractionDigits": cstrsData.fractionDigits}, "", 12.56, ""), "Data constraint: fractionDigits" );
    
  assert.ok( sdjs.valiConstraint({"length": cstrsData.length}, "", "Self Description JSON Schema", ""), "Data constraint: length" );
    
  assert.ok( sdjs.valiConstraint({"maxLength": cstrsData.maxLength}, "", "Data maximum length", ""), "Data constraint: maxLength" );
    
  assert.ok( sdjs.valiConstraint({"minLength": cstrsData.minLength}, "", "Data minimum length", ""), "Data constraint: minLength" );
    
  assert.ok( sdjs.valiConstraint({"pattern": cstrsData.pattern}, "", "3 divided by 4 is 3/4", ""), "Data constraint: pattern" );
    
  assert.ok( sdjs.valiConstraint({"enumeration": cstrsData.enumeration}, "", "jpg", ""), "Data constraint: enumeration" ); 
});

QUnit.test("Testing data SDJS", function(assert) {
  assert.ok( sdjs.valiSdjs(modelData), "Data SDJS" );
});
