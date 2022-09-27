const swal = require('sweetalert2')

const AlertCommon = (type, message, time = 3000, showConfirm = false) => {
      const Toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: showConfirm,
            timer: time,
            timerProgressBar: true,
            didOpen: (toast) => {
                  toast.addEventListener('mouseenter', swal.stopTimer)
                  toast.addEventListener('mouseleave', swal.resumeTimer)
            }
      })
      return (
            <>
                  {type === 'success' &&
                        Toast.fire({
                              icon: 'success',
                              title: message,
                              iconHtml: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                        })
                  }

                  { type === 'error' &&
                        Toast.fire({
                              icon: 'error',
                              title: message,
                              iconHtml: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
                        })
                  }

                  { type === 'complete' &&
                        swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: message,
                              showConfirmButton: showConfirm,
                              timer: time,
                              width: '520px',
                              padding: '5rem',
                              confirmButtonText: 'Complete'
                        })
                  }
            </>

      )
}
export default AlertCommon