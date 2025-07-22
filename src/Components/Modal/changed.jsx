<div>
<Dialog
  open={openCreateTaskDialog}
  onOpenChange={(_, data) => setOpenCreateTaskDialog(data.open)}
>
  <DialogTrigger>
    <Button appearance='primary' className={styles.button} type='button'>
      Create
    </Button>
  </DialogTrigger>
  <DialogSurface>
    <DialogBody>
      <DialogTitle>Create New Task</DialogTitle>
      <DialogContent className={styles.content}>
        <form onSubmit={handleSubmit}>
          {/* Date Row */}
          <div className={styles.row}>
            <div className={`${styles.half} ${styles.field}`}>
              <Label>Date Initiated</Label>
              <Input
                type='date'
                value={dateInitiated}
                onChange={(e) => setDateInitiated(e.target.value)}
              />
            </div>
            <div className={`${styles.half} ${styles.field}`}>
              <Label>Due Date</Label>
              <Input
                type='date'
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>
          {/* Assignment Row */}
          <div className={styles.row}>
            <div className={`${styles.third} ${styles.field}`}>
              <Label>Assigned to</Label>
              <Select
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
              >
                <option>Charlotte Waltson</option>
                <option>Ali</option>
                <option>Fatima</option>
              </Select>
            </div>
            <div className={`${styles.third} ${styles.field}`}>
              <Label>Priority</Label>
              <Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </Select>
            </div>
            <div className={`${styles.third} ${styles.field}`}>
              <Label>Assign Status</Label>
              <Select
                value={assignStatus}
                onChange={(e) => setAssignStatus(e.target.value)}
              >
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </Select>
            </div>
          </div>
          {/* Action Items */}
          <div className={styles.full}>
            <Label>Action Items</Label>
            <textarea
              value={actionItems}
              onChange={(e) => setActionItems(e.target.value)}
              rows={3}
              className={styles.full}
            />
          </div>
          {/* Material List */}
          <div className={styles.row}>
            <div className={`${styles.third} ${styles.field}`}>
              <Label>Material Name</Label>
              <Input
                value={materialName}
                onChange={(e) => setMaterialName(e.target.value)}
              />
            </div>
            <div className={`${styles.third} ${styles.field}`}>
              <Label>Quantity</Label>
              <Input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className={`${styles.third} ${styles.field}`}>
              <Label>Unit</Label>
              <Input
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              />
            </div>
          </div>
          <div style={{ textAlign: "right", marginBottom: 12 }}>
            <Button appearance='subtle' style={{ color: "blue" }}>
              Add More Material
            </Button>
          </div>
          {/* Description */}
          <div className={styles.full}>
            <Label>Description</Label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className={styles.full}
            />
          </div>
          {/* Actions */}
          <div
            className={styles.row}
            style={{ justifyContent: "flex-end", gap: "8px" }}
          >
            <DialogActions>
              <DialogTrigger>
                <Button appearance='secondary'>Close</Button>
              </DialogTrigger>
            </DialogActions>
            <Button
              appearance='primary'
              type='submit'
              onSubmit={() => setOpenCreateTaskDialog(false)}
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </DialogBody>
  </DialogSurface>
</Dialog>
</div>
