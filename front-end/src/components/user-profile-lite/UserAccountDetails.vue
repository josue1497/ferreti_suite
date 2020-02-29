<template>
  <d-card class="card-small mb-4">

    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
    </d-card-header>

    <d-list-group flush>
      <d-list-group-item class="p-3">
        <d-row>
          <d-col>
            <d-form>
              <d-form-row>

                <!-- First Name -->
                <d-col md="6" class="form-group">
                  <label for="feFirstName">Nombres:</label>
                  <d-form-input type="text" id="feFirstName" placeholder="First Name" value="Sierra" />
                </d-col>

                <!-- Last Name -->
                <d-col md="6" class="form-group">
                  <label for="feLastName">Apellidos:</label>
                  <d-form-input type="text" id="feLastName" placeholder="Last Name" value="Brooks" />
                </d-col>

              </d-form-row>

              <d-form-row>

                <!-- Email -->
                <d-col md="6" class="form-group">
                  <label for="feEmail">Correo Electrónico:</label>
                  <d-form-input type="email" id="feEmail" placeholder="Email Address" value="sierra@example.com" />
                </d-col>

                <!-- Password -->
                <d-col md="6" class="form-group">
                  <label for="fePassword">Contraseña:</label>
                  <d-form-input type="password" id="fePassword" placeholder="Last Name" value="EX@MPL#P@$$w0RD" />
                </d-col>

              </d-form-row>

              <!-- Address -->
              <div class="form-group">
                <label for="feInputAddress">Direccion:</label>
                <d-form-input type="text" id="feInputAddress" placeholder="1234 Main St" />
              </div>

              <d-form-row>
                <!-- City -->
                <d-col md="6" class="form-group">
                  <label for="feInputCity">Ciudad:</label>
                  <d-form-input type="text" id="feInputCity" />
                </d-col>

                <!-- State -->
                <d-col md="4" class="form-group">
                  <label for="feInputState">Estado:</label>
                  <d-select :value="null" id="feInputState">
                    <option :value="null" selected>Escoger ...</option>
                    <option>...</option>
                  </d-select>
                </d-col>

                <!-- Zip Code -->
                <d-col md="2"  class="form-group">
                  <label for="inputZip">Código Postal</label>
                  <input type="text" class="form-control" id="inputZip">
                </d-col>

              </d-form-row>

              <d-form-row>

              </d-form-row>

              <d-button type="submit" class="btn-accent">Actualizar Perfil</d-button>

            </d-form>
          </d-col>
        </d-row>
      </d-list-group-item>
    </d-list-group>
  </d-card>
</template>

<script>
export default {
  name: 'user-account-details',
  props: {
    /**
     * The component title.
     */
    title: {
      type: String,
      default: 'Account Details',
    },
  },
};
</script>
