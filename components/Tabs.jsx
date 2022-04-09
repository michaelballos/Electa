import { useState } from 'react'
import { SegmentedControl } from '@mantine/core'
import styles from '../styles/tabs.module.css'
const Tabs = () => {
  const [value, setValue] = useState('react')

  return (
    <div className={styles.tabContainer}>
      <SegmentedControl
        value={value}
        onChange={setValue}
        data={[
          { label: 'Roles', value: 'react' },
          { label: 'Qualifications', value: 'ng' },
          { label: 'Candidates', value: 'vue' },
        ]}
      />
    </div>
  )
}

export default Tabs
