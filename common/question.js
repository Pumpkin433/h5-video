export default {
	activity_id:4,
	total_question:100,
    questionList:[],
    setQusetionList(data){
        this.questionList = Object.assign([],this.questionList,data) 
    },
	teamList:[],
	setTeamList(data){
	    this.teamList = Object.assign([],this.teamList,data) 
	},
}