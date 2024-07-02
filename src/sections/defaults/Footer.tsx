'use client';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useAuthState } from '@/stores';
import { useDrawerState } from '@/stores/selectors/drawer.selector';

export default function Footer() {
  const drawerState = useDrawerState();
  const isAuthenticated = useAuthState();
  return (
    <footer
      className={` bg-gray-700 text-white p-4 transition-all duration-300 ${
        drawerState && isAuthenticated ? 'md:ml-64' : 'ml-0'
      }`}
    >
      <div className="container mx-auto w-full">
        <div className="footer">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </footer>
  );
}
