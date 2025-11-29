import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_APP_DATABASE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Web_App_Database.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function WebAppDatabase(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WEB_APP_DATABASE)} />
}
