<template>
    <div class="section-padding-t90-b100">
        <div class="container">
            <!-- Section Title Start -->
            <SectionTitle title="We provide a range of transportation services" sub-title="Our team of professionals truly care for our customers, our neighbors, our friends, and our family. We are proud to serve our community with the highest sense of dignity and respect." />
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-60">
                <div class="col mt-30" v-for="(blog, index) in blogData.slice(0, 3)" :key="index">
                    <BlogGridItem :blog="blog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import blogData from '~/data/blog.json';

    export default {
        data() {
            return {
               blogData
            }
        },

        components: {
            BlogGridItem: () => import("@/components/BlogGridItem"),
            SectionTitle: () => import("@/components/SectionTitle"),
        },
    };
</script>
