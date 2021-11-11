<template>
  <section
    class="
      min-vh-100
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <div class="card" style="max-width: 540px">
      <div class="card-body p-5 text-center">
        <div class="mb-md-5 my-md-4 pb-5">
          <h2 class="fw-bold mb-2 text-uppercase">Giriş Yap</h2>
          <p class="text-black-50 mb-5">
            E-posta adresinizi ve parolanızı girin.
          </p>

          <form>
            <div class="form-floating mb-4">
              <input
                type="email"
                name="email"
                id="email"
                class="form-control form-control-lg"
                placeholder="E-posta"
                required
                autofocus
              />
              <label class="form-label" for="email">E-posta</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="password"
                name="password"
                id="password"
                class="form-control form-control-lg"
                placeholder="Parola"
                required
                autocomplete="current-password"
              />
              <label class="form-label" for="password">Parola</label>
            </div>

            <div class="form-check" style="text-align: left !important">
              <input
                class="form-check-input"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label class="form-check-label" for="remember">
                Beni Hatırla
              </label>
            </div>

            <p class="small mb-5 pb-lg-2">
              <a class="text-black-50" href="">Şifremi Unuttum</a>
            </p>
            <button class="btn btn-outline-dark btn-lg px-5" type="submit">
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>