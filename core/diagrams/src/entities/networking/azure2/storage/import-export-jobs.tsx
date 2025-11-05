import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMPORT_EXPORT_JOBS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Import_Export_Jobs.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 67,
}

export function ImportExportJobs(props: NodeProps) {
  return (
    <Shape
      {...IMPORT_EXPORT_JOBS}
      {...props}
      _style={extendStyle(IMPORT_EXPORT_JOBS, props)}
    />
  )
}
