import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK_ACL_ACCESS_CONTROL_LIST = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.network_acl_access_control_list;',
  _width: 47.400000000000006,
  _height: 42.599999999999994,
}

export function NetworkAclAccessControlList(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORK_ACL_ACCESS_CONTROL_LIST}
      {...props}
      _style={extendStyle(NETWORK_ACL_ACCESS_CONTROL_LIST, props)}
    />
  )
}
