<template>
	<v-layout column justify-center align-center>
    <v-flex
    	xs12
      	sm8
      	md6
    >
	<v-data-table
		:headers="headers"
		:items="posts"
		:items-per-page="5"
		class="elevation-1"
	></v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
	mounted(){
		this.$store.dispatch('getPost');
	},
	computed: mapState(['posts']),
	data () {
      return {
        headers: [
			{
				text: 'Title',
				align: 'start',
				value: 'title',
			},
			{ text: 'Body', value: 'body' },
        ],
      }
	},
	
}
</script>
