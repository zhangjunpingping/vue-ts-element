import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators'
import store from '@/store'

export interface IUserState {
  token: string
  name: string
  roles: string[]
}

// @Module 标记当前为module
// module本身有几种可以配置的属性
// 1、namespaced:boolean 启/停用 分模块
// 2、stateFactory:boolean 状态工厂
// 3、dynamic:boolean 在store创建之后，再添加到store中。 开启dynamic之后必须提供下面的属性
// 4、name:string 指定模块名称
// 5、store:Vuex.Store实体 提供初始的store
@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  // 在需要引用的地方单独引用该store文件即可注入。
  // 好处：灵活使用，仅仅在需要引入的地方才注入到store中去
  // 缺点：需要单独引入文件

  /* 这里代表的就是state里面的状态 */
  public token = ''
  public name = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []

  // @Mutation 标注为mutation
  @Mutation
  private SET_TOKEN(token: string) {
    // 设置token
    this.token = token
  }

  @Mutation
  private SET_NAME(name: string) {
    // 设置用户名
    this.name = name
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    // 设置角色
    this.roles = roles
  }

  // @Action 标注为action
  @Action
  public async Login(userInfo: { username: string; password: string }) {
    // 登录接口，拿到token
    // let { username, password } = userInfo
    // username = username.trim()
    // const { data } = await login({ username, password })
    this.SET_TOKEN('123131')
  }

  @Action
  public ResetToken() {
    // 重置token（清空操作），需重新登录
    // removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }

  @Action
  public async GetUserInfo() {
    // 获取用户信息
    throw Error('GetUserInfo: token is undefined!')
  }

  @Action({ commit: 'SET_NAME' })
  public async doLogin() {
    // const token = await login(
    //   loginForm.username,
    //   loginForm.password,
    //   loginForm.verificationCode,
    //   loginForm.key
    // )
    return '12313'
  }
}

// getModule 得到一个类型安全的store，module必须提供name属性
export const UserModule = getModule(User)
