import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOBILE_HOTFIX = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mobile_hotfix;',
  _width: 50.099999999999994,
  _height: 50.099999999999994,
}

export function MobileHotfix(props: DiagramNodeProps) {
  return <Shape {...MOBILE_HOTFIX} {...props} />
}
