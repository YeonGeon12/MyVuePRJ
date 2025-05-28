<template>
  <div>
    <h2>회원가입</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <!-- 이메일 필드 -->
      <div class="form-group">
        <label>이메일</label>
        <Field name="email" class="text-danger" />
      </div>
      <!-- 비밀번호 필드 -->
      <div class="form-group">
        <label>비밀번호</label>
        <Field name="password" type="password" class="form-control" />
        <ErrorMessage name="password" class="text-danger" />
      </div>
      <!-- 비밀번호 확인 필드 -->
      <div class="form-group">
        <label>비밀번호 확인</label>
        <Field name="confirmPassword" type="password" class="form-control" />
        <ErrorMessage name="confirmPassword" class="text-danger" />
      </div>
      <!-- 약관 동의 체크박스 -->
      <div class="form-group form-check">
        <Field name="acceptTerms" type="checkbox" :value="true" class="form-check-input" />
        <label class="form-check-label">약관 동의</label>
        <ErrorMessage name="acceptTerms" class="text-danger" />
      </div>
      <!-- 제출 버튼 -->
      <button type="submit" class="btn btn-primary">가입하기</button>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: Yup.object().shape({
        email: Yup.string().email('유효한 이메일 주소를 입력해주세요').required('이메일은 필수입니다'),
        password: Yup.string().min(6, '비밀번호는 최소 6자리 이상이여야 합니다.').required('비밀번호는 필수입니다'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
          .required('비밀번호 확인은 필수입니다'),
        acceptTerms: Yup.boolean().oneOf([true], '약관에 동의해야 합니다')
      })
    };
  },
  methods: {
    onSubmit(values) {
      console.log('Form submit: ', values);
    }
  }
};
</script>
