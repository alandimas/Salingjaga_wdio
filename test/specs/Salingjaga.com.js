const { expect } = require('@wdio/globals');

describe("Salingjaga.com", () => {
  it("tests Salingjaga.com", async () => {
    await browser.setWindowSize(850, 551);
    await browser.url("https://salingjaga.com/");

    // Pastikan URL benar
    await expect(browser).toHaveUrl("https://salingjaga.com/");

    // Klik tombol pertama
    const firstButton = await $("button.z-\\[4\\]");
    await firstButton.waitForClickable({ timeout: 5000 });
    await firstButton.click();

    // Pilih opsi
    const option1 = await $("div.box-border > div:nth-of-type(2) > div:nth-of-type(1) label:nth-of-type(1)");
    await option1.waitForClickable({ timeout: 5000 });
    await option1.click();

    // Isi form kesehatan
    await $("#KESEHATAN\\.height_ID").setValue("170");
    await $("#KESEHATAN\\.weight_ID").setValue("80");

    // Pilih jawaban kesehatan
    await $("div:nth-of-type(3) label:nth-of-type(1)").click();
    await $("div:nth-of-type(4) label:nth-of-type(2)").click();
    await $("div:nth-of-type(5) label:nth-of-type(2)").click();

    // Klik tombol submit
    const submitButton = await $("form button");
    await submitButton.waitForClickable({ timeout: 5000 });
    await submitButton.click();

    // Isi data diri
    await $("#DATA_DIRI\\.id_card_no_ID").setValue("3173082411190089");
    await $("#DATA_DIRI\\.id_card_full_name_ID").setValue("Alan Dimas Sardi");
    await $("#DATA_DIRI\\.id_card_pob_ID").setValue("Jakarta");
    await $("#DATA_DIRI\\.id_card_dob_ID").setValue("1992-11-11");
    await $("#DATA_DIRI\\.whatsapp_number_ID").setValue("08557001000");
    await $("#DATA_DIRI\\.email_ID").setValue("alandimas92@gmail.com");

    // Klik tombol Lanjut
    await submitButton.click();

    // Upload file
    const filePath = "./path/to/your/file.jpeg";
    const remoteFilePath = await browser.uploadFile(filePath);
    await $("#idCardUpload").setValue(remoteFilePath);

    // Submit form
    await submitButton.click();

    // Isi kompensasi
    await $("#rangeCompensation").setValue("300000000");
    await $("label:nth-of-type(3) span.rounded-\\[50\\%\\]").click();

    // Submit terakhir
    await submitButton.click();

    // Verifikasi akhir
    const finalInput = await $("input");
    await finalInput.waitForClickable({ timeout: 5000 });
    await finalInput.click();
    await $("div.justify-center button").click();
  });
});

//npx wdio run wdio.conf.js --spec .\test\specs\Salingjaga.com.js