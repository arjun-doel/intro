// console.log('Hello')
// console.log('Hi!')

// let result = 2 + 2

// let work = function(){
//   console.log('working hard!')
// }

// const doWork = function(f){
//   console.log('Starting')
//   f()
//   console.log('End')
// };

// doWork(work)

(function () {

  var createWorker = function () {

    var workCount = 0;

    var task1 = function () {
      workCount++
      console.log(`task1 ${workCount}`)
    }

    var task2 = function () {
      workCount++
      console.log(`task2 ${workCount}`)
    }

    return {
      job1: task1,
      job2: task2,
    }
  }

  var worker = createWorker()

  worker.job1()
  worker.job2()
  worker.job1()
  worker.job2()
  worker.job1()
  worker.job2()
}());

(function(){
  console.log('new Iffy')
}());