<template>
    <nav class="site-main-menu">
        <ul>
            <li>
                <n-link to="/about" class="link">About</n-link>
            </li>
            <li>
              <n-link to="/capabilities" class="link">Capabilities</n-link>
            </li>
<!--            <li>-->
<!--                <n-link to="/service" class="link">Services</n-link>-->
<!--            </li>-->
            <li>
                <n-link to="/contact-us" class="link">Contact Us</n-link>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    .link {
      color: $black;
      text-transform: uppercase;
    }
</style>
