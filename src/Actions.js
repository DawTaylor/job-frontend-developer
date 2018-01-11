import axios from 'axios'

export const Actions = ({ setState }) => ({
  fetchVideos(state, term) {
    setState({ loading: 'is-loading' })
    return axios.get(`https://content.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&type=video&maxResults=8&key=AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc&q=${term}`)
      .then(res => ({
          loading: false,
          videos: res.data.items
      }))
      .catch(err => ({ loading: false, err }))
  },
  artist: state => ({ state })
})