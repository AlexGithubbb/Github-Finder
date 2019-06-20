// async function getData(){
//   const response = await fetch();
//   const resData = await response.json();

// }

class Github{
  constructor(){
    this.client_id = 'dc1fee9e8502399de084';
    this.client_secret = '7231ecd6a46c1e7023b50f3702f9b8c80cae909f';
    this.repos_count  = 5;
    this.repos_sort = 'created asc';
  }
  // async getUser(user){
  //   const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    
  //   const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    
  //   const profile= await profileResponse.json();
  //   const repos = await reposResponse.json();
  //   return {
  //     profile,
  //     repos
  //   }
  // }

  async getUser(user) {

    const [profileResponse, repoResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`).then(response => response.json()),
      fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`).then(response => response.json())
    ]);

    return {
      profile: profileResponse,
      repos: repoResponse
    }
  }
}
