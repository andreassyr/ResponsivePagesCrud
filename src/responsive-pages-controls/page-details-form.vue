<style>
    .page-details-form
    {

    }

    .page-details-form input,
    .page-details-form textarea,
    .page-details-form select
    {
        border-color: #46c7c3;
    }
    
    .page-details-form .help-block
    {
        display: none;
    }

    .page-details-form .form-group.has-error .help-block
    {
        display: block;
    }

</style>
<template>
    <div class="page-details-form">
        <form class="" @submit.prevent="onSubmit">
            <div class="form-group" :class="{'has-error':errors.title}">
                <label for="tile-input" class="control-label">Title</label>
                <input type="text" class="form-control"
                       v-model="page.title"
                       @blur="validateTitle"
                       id="title-input" placeholder="Enter your page's title">
                <span class="help-block">Title cannot be empty and must be less than 50 characters</span>
            </div>
            <div class="form-group" :class="{'has-error':errors.description}">
                <label for="description-input" class="control-label">Description</label>
                <textarea placeholder="Enter a description about your page" 
                          v-model="page.description"
                          @blur="validateDescription"
                          class="form-control" id="description-input"></textarea>
                <span class="help-block">Description cannot be empty and must be less than 200 characters</span>
            </div>
            <div class="form-group" :class="{'has-error':errors.type}">
                <label for="type-input" class="control-label">Page type</label>
                <select v-model.number="page.type" @blur="validateType"
                        class="form-control" id="type-input">
                    <option disabled selected value="-1">Please select a page type</option>
                    <option value="0">Menu</option>
                    <option value="1">Events</option>
                    <option value="2">Content</option>
                </select>
                <span class="help-block">Please select a page type</span>
            </div>
            <div class="form-group">
                <label class="control-label">Publish on</label>
                <datetime-picker v-model="page.publishedOn" class="form-control"></datetime-picker>
            </div>
            <div class="form-group">
                <div class="checkbox">
                    <label>
                        <input v-model="page.isActive" type="checkbox"> Make it visible to the users
                    </label>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10 text-right">
                    <button type="button" class="btn btn-default" @click="$emit('back')">Back</button>
                    <button type="submit" class="btn btn-info">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import moment from 'moment';
    import DatetimePicker from '../commons/datetime-picker.vue';
    export default {
        components: {
            'datetime-picker': DatetimePicker
        },
        data() {
            return{
                errors: {
                    title: false,
                    description: false,
                    type: false
                }
            }
        },
        props: {
            page: {
                type: Object,
                default() {
                    return{
                        title: '',
                        description: '',
                        type: -1,
                        isActive: true,
                        publishedOn: moment()
                    }
                }
            }
        },
        methods: {
            onSubmit() {

                this.validateTitle();
                this.validateDescription();
                this.validateType();
                for (let key in this.errors)
                {
                    if (this.errors[key])
                        return;
                }

                this.$emit('submit', this.page);
            },
            validateTitle()
            {
                var page = this.page;
                if (page.title.length > 0 && page.title.length <= 50)
                {
                    this.errors.title = false;
                } else
                {
                    this.errors.title = true;
                }
            },
            validateDescription()
            {
                var page = this.page;
                if (page.description.length > 0 && page.description.length <= 200)
                {
                    this.errors.description = false;
                } else
                {
                    this.errors.description = true;
                }
            },
            validateType()
            {
                var page = this.page;
                this.errors.type = page.type === -1;
            }
        }
    }
</script>