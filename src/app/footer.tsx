import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="container mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <Image
              src="https://cdn.worldvectorlogo.com/logos/foodpanda-logo.svg"
              alt="Foodpanda Logo"
              width={150}
              height={40}
            />
            <p className="text-gray-400 mt-4 text-sm">
              Your favorite meals delivered fresh to your doorstep.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Press</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Support</h4>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">FAQs</Link></li>
                <li><Link href="#">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
                <li><Link href="#">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media and App Download */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-0">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <Link href="#"><Image src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width={24} height={24}  alt="Facebook" /></Link>
            <Link href="#"><Image src="https://cdn-icons-png.flaticon.com/512/733/733558.png" width={24} height={24}  alt="Instagram" /></Link>
            <Link href="#"><Image src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width={24} height={24}  alt="Twitter" /></Link>
          </div>

          {/* App Store Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width={150}
                height={50}
              />
            </Link>
            <Link href="#">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/330px-Download_on_the_App_Store_RGB_blk.svg.png"
                alt="App Store"
                width={140}
                height={50}
              />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Foodpanda. All rights reserved.</p>
        </div>
      </div>

      {/* Custom Section at the Bottom */}
      <div className="bg-slate-300 flex items-center justify-center w-full h-11 text-slate-700 text-sm">
        <p>Created from scratch by Tabsheera Shakeel🤍</p>

        <Link
          href="https://www.linkedin.com/in/tabsheera-shakeel-116555300/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
            alt="LinkedIn"
            width={38}
            height={24}
            className="inline-block"
          />
        </Link>

        <Link
          href="https://github.com/Tabsheera-Shakeel"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="inline-block"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;