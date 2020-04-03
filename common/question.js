export default {
	total_question:100,
    questionList:[],
    setQusetionList(data){
        this.questionList = Object.assign([],this.questionList,data) 
    }
}