// tslint:disable:quotemark ordered-imports no-any no-empty
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const events_1 = require("events");

const async_1 = require("../../../common/utils/async");

class BaseDebugServer extends events_1.EventEmitter {
  constructor(debugSession) {
    super();
    this.isRunning = false;
    this.debugSession = debugSession;
    this.debugClientConnected = async_1.createDeferred();
    this.clientSocket = async_1.createDeferred();
  }

  get client() {
    return this.clientSocket.promise;
  }

  get IsRunning() {
    if (this.isRunning === undefined) {
      return false;
    }

    return this.isRunning;
  }

  get DebugClientConnected() {
    return this.debugClientConnected.promise;
  }

}

exports.BaseDebugServer = BaseDebugServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2VEZWJ1Z1NlcnZlci5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImV2ZW50c18xIiwicmVxdWlyZSIsImFzeW5jXzEiLCJCYXNlRGVidWdTZXJ2ZXIiLCJFdmVudEVtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsImRlYnVnU2Vzc2lvbiIsImlzUnVubmluZyIsImRlYnVnQ2xpZW50Q29ubmVjdGVkIiwiY3JlYXRlRGVmZXJyZWQiLCJjbGllbnRTb2NrZXQiLCJjbGllbnQiLCJwcm9taXNlIiwiSXNSdW5uaW5nIiwidW5kZWZpbmVkIiwiRGVidWdDbGllbnRDb25uZWN0ZWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0FBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUF4Qjs7QUFDQSxNQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyw2QkFBRCxDQUF2Qjs7QUFDQSxNQUFNRSxlQUFOLFNBQThCSCxRQUFRLENBQUNJLFlBQXZDLENBQW9EO0FBQ2hEQyxFQUFBQSxXQUFXLENBQUNDLFlBQUQsRUFBZTtBQUN0QjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxTQUFLRCxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtFLG9CQUFMLEdBQTRCTixPQUFPLENBQUNPLGNBQVIsRUFBNUI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CUixPQUFPLENBQUNPLGNBQVIsRUFBcEI7QUFDSDs7QUFDUyxNQUFORSxNQUFNLEdBQUc7QUFDVCxXQUFPLEtBQUtELFlBQUwsQ0FBa0JFLE9BQXpCO0FBQ0g7O0FBQ1ksTUFBVEMsU0FBUyxHQUFHO0FBQ1osUUFBSSxLQUFLTixTQUFMLEtBQW1CTyxTQUF2QixFQUFrQztBQUM5QixhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLEtBQUtQLFNBQVo7QUFDSDs7QUFDdUIsTUFBcEJRLG9CQUFvQixHQUFHO0FBQ3ZCLFdBQU8sS0FBS1Asb0JBQUwsQ0FBMEJJLE9BQWpDO0FBQ0g7O0FBbkIrQzs7QUFxQnBEZCxPQUFPLENBQUNLLGVBQVIsR0FBMEJBLGVBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6cXVvdGVtYXJrIG9yZGVyZWQtaW1wb3J0cyBuby1hbnkgbm8tZW1wdHlcbid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGV2ZW50c18xID0gcmVxdWlyZShcImV2ZW50c1wiKTtcbmNvbnN0IGFzeW5jXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL2FzeW5jXCIpO1xuY2xhc3MgQmFzZURlYnVnU2VydmVyIGV4dGVuZHMgZXZlbnRzXzEuRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkZWJ1Z1Nlc3Npb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWJ1Z1Nlc3Npb24gPSBkZWJ1Z1Nlc3Npb247XG4gICAgICAgIHRoaXMuZGVidWdDbGllbnRDb25uZWN0ZWQgPSBhc3luY18xLmNyZWF0ZURlZmVycmVkKCk7XG4gICAgICAgIHRoaXMuY2xpZW50U29ja2V0ID0gYXN5bmNfMS5jcmVhdGVEZWZlcnJlZCgpO1xuICAgIH1cbiAgICBnZXQgY2xpZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRTb2NrZXQucHJvbWlzZTtcbiAgICB9XG4gICAgZ2V0IElzUnVubmluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pc1J1bm5pbmc7XG4gICAgfVxuICAgIGdldCBEZWJ1Z0NsaWVudENvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVidWdDbGllbnRDb25uZWN0ZWQucHJvbWlzZTtcbiAgICB9XG59XG5leHBvcnRzLkJhc2VEZWJ1Z1NlcnZlciA9IEJhc2VEZWJ1Z1NlcnZlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VEZWJ1Z1NlcnZlci5qcy5tYXAiXX0=