import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
}); 
/*새로운 GraphQLServer 만들어서 환경설정하기
typeDefs로 스키마 파일 전달하기 : 주고받을 정보의 형식을 지정
요청에 따라 응답할 resolvers 파일 전달하기 : 스키마에서 받은 요청을 해결한다.
*/
server.start(()=>console.log("GraphQL Server Running"));
//서버 시작시 cosole.log() 반환값 출력