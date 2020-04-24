export default {
	activity_id:1,
	total_question:100,
    questionList:[],
    setQusetionList(data){
        this.questionList = Object.assign([],this.questionList,data) 
    }
}