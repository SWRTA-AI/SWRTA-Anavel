<template>
  <b-container class="px-0">
    <b-form @submit="onSubmit">
      <b-container>
        <b-form-group label="Name / email" label-for="input-email">
          <b-form-input
            id="input-email"
            v-model="form.email"
            placeholder="Hi, I'm..."
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Type" label-for="input-type">
          <b-form-select
            id="input-type"
            v-model="form.type"
            :options="types"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          label="Device - browser"
          label-for="input-device"
          v-if="form.type == 'bug'"
        >
          <b-form-input
            id="input-device"
            v-model="form.device"
            placeholder="I'm using my ..."
            required
          ></b-form-input>
          <b-form-text id="password-help-block">
            e.g: (PC - chrome, iPhone X, etc.)
          </b-form-text>
        </b-form-group>

        <b-form-group label="Details" label-for="input-detail">
          <b-form-textarea
            id="input-detail"
            v-model="form.name"
            placeholder="so..."
            required
          ></b-form-textarea>
        </b-form-group>

        <b-col class="text-right">
          <b-button
            type="submit"
            :variant="isSubmitted ? 'success' : 'primary'"
            :disabled="isSubmitted"
          >
            {{ isSubmitted ? 'Thank you!' : 'Submit' }}
          </b-button>
        </b-col>
      </b-container>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        type: null,
        detail: '',
        device: '',
      },
      types: [
        { text: 'I would like to...', value: null },
        { text: 'Request a feature', value: 'request' },
        { text: 'Report a bug', value: 'bug' },
        { text: 'Other', value: 'other' },
      ],
      isSubmitted: false,
    };
  },
  methods: {
    onSubmit(evt) {
      this.isSubmitted = true;
      evt.preventDefault();
      console.log(JSON.stringify(this.form));
    },
  },
};
</script>
