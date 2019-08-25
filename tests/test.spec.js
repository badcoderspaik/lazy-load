describe('Проверочный тест', function () {
  it('any text', function () {
    const images = document.querySelectorAll('img');
    expect(images.length === 0).toBe(false);
  });
});