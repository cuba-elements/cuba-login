/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   cuba-login.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../paper-button/paper-button.d.ts" />
/// <reference path="../paper-input/paper-input.d.ts" />
/// <reference path="../iron-a11y-keys/iron-a11y-keys.d.ts" />
/// <reference path="../cuba-app/cuba-app-aware-behavior.d.ts" />
/// <reference path="../cuba-app/cuba-localize-behavior.d.ts" />

/**
 * `cuba-login` - basic login form.
 *
 * Example:
 *
 * ```html
 * <cuba-login on-cuba-login-success="_handleLoginSuccess" on-cuba-login-error="_handleLoginError"></cuba-login>
 * ```
 *
 * Using custom button:
 *
 * ```html
 * <cuba-login>
 *   <paper-button slot="login-button">My Custom Login Button</paper-button>
 * </cuba-login>
 * ```
 *
 * ### Styling
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--cuba-login-form`           | Mixin applied to the form element   | {}
 * `--cuba-login-username-input` | Mixin applied to the username input | {}
 * `--cuba-login-password-input` | Mixin applied to the password input | {}
 * `--cuba-login-submit-button`  | Mixin applied to the submit button  | {}
 * `--cuba-login-actions`        | Mixin applied to the actions block  | {}
 */
interface CubaLoginElement extends Polymer.Element, CubaLocalizeBehavior, CubaAppAwareBehavior {

  /**
   * Username field value
   */
  username: string|null|undefined;

  /**
   * Password field value
   */
  password: string|null|undefined;

  /**
   * Set to true to use LDAP authentication endpoint
   */
  ldap: boolean|null|undefined;
  _keysTarget: object|null|undefined;
  ready(): void;
  submit(): void;
}

interface HTMLElementTagNameMap {
  "cuba-login": CubaLoginElement;
}
